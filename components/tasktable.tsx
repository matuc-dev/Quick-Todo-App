'use client'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState } from "react";
import { Dialog, DialogFooter, DialogHeader, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogClose } from "./ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Trash2 } from 'lucide-react';

interface Tasks {
  id: number;
  title: string;
  discription: string;
}

export function Tasktable() {

  const [text, setText] = useState<Tasks[]>([]);
  const [tname, setTname] = useState('');
  const [tdis, setTdis] = useState('');

  const addTask = () => {
    const newTask = {
      id: Math.random(),
      title: tname,
      discription: tdis,
    }
    if (newTask.title == '') {
      return;
    } else {
      setText([...text, newTask]);
      setTname('')
    } if (newTask.discription == '') {
      return;
    } else {
      setTdis('');
    }
  }


  return (
    <div className="">

      <div className="flex flex-col w-full sm:p-4 gap-6">
        <div className="flex flex-col">
          <h1 className='text-2xl md:text-3xl font-bold'>Welcome Back!</h1>
          <p className='text-zinc-400 font-medium'>What will you do today?</p>
        </div>
        <div className="rounded-md border w-[350px] sm:w-[600px] md:w-[700px]  lg:w-[1000px] bg-zinc-950">

          <Table className="">
            <TableHeader>
              <TableRow>
                <TableHead className="font-medium">Title</TableHead>
                <TableHead className="font-medium">Discription</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {text.map((item, index) => {
                const deleteTasks = () => {
                  const newTodos = [...text]
                  newTodos.splice(index, 1)
                  setText(newTodos)
                }
                return (
                  <TableRow key={index}>
                    <TableCell>
                      {item.title}
                    </TableCell>
                    <TableCell>
                      {item.discription}
                    </TableCell>
                    <Trash2 onClick={deleteTasks} className=" text-red-600 mt-[8.5px]" size={17} />
                  </TableRow>
                );
              })}

            </TableBody>
          </Table>

        </div>
        <div className="">
          <Dialog>
            <DialogTrigger asChild className='flex items-center '>
              <Button className='gap-2' variant={'outline'}>
                <PlusCircledIcon width="18" height="18" />Add New Task
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className='text-xl'>What will you do today?</DialogTitle>
                <DialogDescription>
                  You can add New Tasks.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    TaskName
                  </Label>
                  <Input placeholder="Go Shopping" id="name" onChange={(e) => { setTname(e.target.value) }} value={tname} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Discription
                  </Label>
                  <Input placeholder="Buy a Cookie and clothes" onChange={(e) => { setTdis(e.target.value) }} id="username" value={tdis} className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose>
                  <Button onClick={addTask} className='flex items-center justify-center gap-1' variant={'outline'} type="submit"><PlusCircledIcon width="18" height="18" />Add New Task</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
