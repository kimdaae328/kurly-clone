import React from 'react'
import db from '@/lib/db';
import getSession from '@/lib/session';

async function getUser(){
  const session = getSession();
  if(session.id){
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      }
    })
  }
}

export default function Mypage() {
  const user = await getUser()
  return (
    <h2>회원가입을 축하합니다.</h2>
  )
}
