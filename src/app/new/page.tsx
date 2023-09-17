import Link from 'next/link'
import {prisma} from '@/db'
import {redirect} from 'next/navigation'
async function createTodo(data:FormData){
    "use server"
    const title = data.get("title")?.valueOf()
    if (typeof title !== "string" || title.length === 0){
        throw  new Error("Invalid")
      }
    console.log("hi")
    await prisma.todo.create({data:{title,completed:false}})
    redirect('/')
  }
export default function Page(){
    return (
    <>
      <header className="flex items-center justify-between mb-4">
  <h1 className="text-3xl">New To-do</h1>
 
    </header>
    <form action={createTodo} className='flex flex-col gap-3 p-3 m-8'>
       <input
         type='text'
         name="title"
         className = "border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-300"
        />
        <div class="flex gap-3 p-3">
          <Link href='/'>Cancel</Link>
          <button type="submit" className="btn bg-zinc-900 px-3 rounded-md hover:rounded-xl  ">Add</button>
          
        </div>

    </form>
    </>
    )  }
