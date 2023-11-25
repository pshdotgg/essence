import { db } from '@/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { createUploadthing, type FileRouter } from 'uploadthing/next'

import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { PineconeStore } from 'langchain/vectorstores/pinecone'
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase'
import { pinecone } from '@/lib/pinecone'
import { supabaseClient } from '@/lib/supabase'

const f = createUploadthing()

export const ourFileRouter = {
  pdfUploader: f({ pdf: { maxFileSize: '4MB' } })
    .middleware(async ({ req }) => {
      const { getUser } = getKindeServerSession()
      const user = getUser()

      if (!user || !user.id) throw new Error('UNAUTHORIZED')
      return { userId: user.id }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const createdFile = await db.file.create({
        data: {
          key: file.key,
          name: file.name,
          userId: metadata.userId,
          url: `https://uploadthing-prod.s3.us-west-2.amazonaws.com/${file.key}`,
          uploadStatus: 'PROCESSING',
        },
      })

      try {
        const response = await fetch(
          `https://uploadthing-prod.s3.us-west-2.amazonaws.com/${file.key}`
        )
        const blob = await response.blob()

        const loader = new PDFLoader(blob)
        const docs = await loader.load()
        docs.forEach((doc) => {
          doc.metadata = { ...doc.metadata, fileId: createdFile.id }
        })

        const pagesAmt = docs.length

        // const pineconeIndex = pinecone.Index('essence')
        const embeddings = new OpenAIEmbeddings({
          openAIApiKey: process.env.OPENAI_API_KEY,
        })

        await SupabaseVectorStore.fromDocuments(docs, embeddings, {
          client: supabaseClient,
          tableName: 'documents',
          queryName: 'match_documents',
        })

        // const vectorStore = await SupabaseVectorStore.fromTexts(
        //   ['Hello world', 'Bye bye', "What's this?"],
        //   [{ id: 2 }, { id: 1 }, { id: 3 }],
        //   new OpenAIEmbeddings(),
        //   {
        //     client: supabaseClient,
        //     tableName: 'documents',
        //     queryName: 'match_documents',
        //   }
        // )

        // console.log(docs)

        // const resultOne = await vectorStore.similaritySearch('Hello world', 1)

        // console.log(resultOne)

        // console.log(vectorStore)

        // await PineconeStore.fromDocuments(pageLevelDocs, embeddings, {
        //   pineconeIndex,
        //   namespace: createdFile.id,
        // })

        await db.file.update({
          data: {
            uploadStatus: 'SUCCESS',
          },
          where: {
            id: createdFile.id,
          },
        })
      } catch (err) {
        console.log(err)
        await db.file.update({
          data: {
            uploadStatus: 'FAILED',
          },
          where: {
            id: createdFile.id,
          },
        })
      }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
