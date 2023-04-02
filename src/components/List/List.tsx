// APIを取ってくるテストコード
import React, { useState, useEffect } from 'react';
import styles from "../../styles/Home.module.scss";

// 型情報は取りたい値によって変更してください
interface User {
  id: number;
  name: string;
}

// 以下、リスト型で欲しいAPI情報を取得して表示
export function List() {
    // 最終的に表示する型をinterfaceでバインド
    const [users, setUsers] = useState<User[]>([]);
    
    // 試したいAPIのurlを入れる  
    async function getUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();
      return users;
    }
  
    async function listUsers() {
      const newUsers = await getUsers();
      const limitedUsers = newUsers.slice(0, 10);
      setUsers((prevUsers) => [...prevUsers, ...limitedUsers]);
    }  
    // useEfectのおまじない(再レンダリングさせない) 
    useEffect(() => {
      listUsers();
    }, []);
  
    return (
      <div>
        <button id="addBtn" onClick={() => listUsers()}>
          Get Users
        </button>
        <ul id="lists">
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  