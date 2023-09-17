import Link from 'next/link'
import TodoItem from './components/TodoItem'
import { prisma } from '@/db'
function getTodos(){
    return prisma.todo.findMany();
  }

 async function toggleTodo(id:string,completed:boolean){
      "use server"
      console.log(id,completed)
      await prisma.todo.update({where:{id},data:{completed}})
    }
export default async function Home(){
  const todos = await getTodos()
  return (
  <>
  <header className="flex items-center justify-between mb-4">
  <h1 className="text-3xl">Todo - App</h1>
  <Link className="border border-slate-400 px-2 py-2 rounded-xl hover:bg-slate-700 focus-within:bg-slate-800 outline-none" href='/new'>New-page</Link>
  
  </header>
  <ul className="pl-4">
    {todos.map(todo=>(
       <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/> 
      ))} 
      </ul>
  </>
  )
  }
