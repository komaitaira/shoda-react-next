import { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import firebase from 'firebase';
import '../../components/fire';

// firestoreメソッドでFirestoreのオブジェクトを取り出す。このオブジェクトを使い、Firestoreにアクセスする
const db = firebase.firestore();

export default function Home() {
  // mydataはfirestoreから取り出したデータを保管しておくもの
  const mydata = [];
  const [data, setData] = useState(mydata);
  const [message, setMessage] = useState('wait...');

  useEffect(() => {
    // collectionの引数にどのコレクションにアクセスするかの情報を与える。コレクション名を指定。
    db.collection('mydata').get().then((snapshot) => {
      // snapshotから順に要素を取り出して処理を行う。ここでいう要素とはドキュメントのこと。
      snapshot.forEach((document) => {
        // ドキュメントからデータを取り出す
        const doc = document.data();
        // 空の配列mydataにJSXでタグを作成し、ドキュメントの値を格納していく
        mydata.push(
          <tr key={document.id}>
            <td>
              <a href={'/fire/del?id=' + document.id}>{document.id}</a>
            </td>
            <td>{doc.name}</td>
            <td>{doc.mail}</td>
            <td>{doc.age}</td>
          </tr>
        );
      });
      setData(mydata);
      setMessage('Firebase data.');
    })
  }, []);

  return (
    <div>
      <Layout header="Next.js" title="Top page">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">{message}</h5>
          <table className="table bg-white text-left">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Mail</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {data}
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  )
}