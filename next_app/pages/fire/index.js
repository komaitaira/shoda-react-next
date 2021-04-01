import { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import firebase from 'firebase';
import '../../components/fire';

// firestoreメソッドでFirestoreのオブジェクトを取り出す。このオブジェクトを使い、Firestoreにアクセスする
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

auth.signOut()

export default function Home() {
  // mydataはfirestoreから取り出したデータを保管しておくもの
  const mydata = [];
  const [data, setData] = useState(mydata);
  const [message, setMessage] = useState('wait...');

  useEffect(() => {
    auth.signInWithPopup(provider).then(result => {
      setMessage('logined: ' + result.user.displayName);
    }).catch((error) => {
      setMessage("not logined.")
    });
  }, []);

  useEffect(() => {
    if (auth.currentUser != null) {
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
      })
    } else {
      mydata.push(
        <tr key="1"><th colSpan="4">can't get data.</th></tr>
      )
    }
  }, [message])

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


// import { useState, useEffect } from 'react';
// import Layout from '../../components/layout';
// import firebase from 'firebase';
// import '../../components/fire';

// // firestoreメソッドでFirestoreのオブジェクトを取り出す。このオブジェクトを使い、Firestoreにアクセスする
// const db = firebase.firestore();

// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export default function Home() {
//   // mydataはfirestoreから取り出したデータを保管しておくもの
//   const mydata = [];
//   const [data, setData] = useState(mydata);
//   const [message, setMessage] = useState('wait...');

//   useEffect(() => {
//     auth.signInWithPopup(provider).then(result => {
//       setMessage('logined: ' + result.user.displayName);
//     });
//   }, []);

//   return (
//     <div>
//       <Layout header="Next.js" title="Top page">
//         <div className="alert alert-primary text-center">
//           <h5 className="mb-4">{message}</h5>
//           <p className="h6 text-left">
//             uid: {auth.currentUser != null ? auth.currentUser.uid : ""}<br />
//             displayName: {auth.currentUser != null ? auth.currentUser.displayName : ""}<br />
//             email: {auth.currentUser != null ? auth.currentUser.email : ""}<br />
//             phoneNumber: {auth.currentUser != null ? auth.currentUser.phoneNumber : ""}<br />
//           </p>
//         </div>
//       </Layout>
//     </div>
//   )
// }