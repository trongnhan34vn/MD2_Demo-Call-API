import React from 'react'

export default function DemoFetchApi() {
    const getFetch = () => {
        fetch("http://localhost:4000/products")
            //   Ép kiểu dữ liệu
            // .then((res) => console.log(res))
            .then((res) => res.json())
            //   Lấy dữ liệu
            .then((data) => console.log(data))
            //   Bắt trường hợp lỗi
            .catch((err) => console.log(err))
    }
    const postFetch = () => {
        fetch("http://localhost:4000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // ép kiêu dữ liệu json
            },
            body: JSON.stringify(
                {
                    name: "Hello World",
                    age: 47
                }
            )
        })
            .then((res) => res.json())
            //   Lấy dữ liệu
            .then((data) => console.log(data))
            //   Bắt trường hợp lỗi
            .catch((err) => console.log(err))
    }
    const putFetch = () => {
        fetch("http://localhost:4000/products/P005", {
            method: "put",
            headers: {
                "Content-Type": "application/json", // ép kiêu dữ liệu json
            },
            body: JSON.stringify(
                {
                    id: "P005",
                    name: "Hello Nhân",
                    age: 47
                }
            )
        })
            .then((res) => res.json())
            //   Lấy dữ liệu
            .then((data) => console.log(data))
            //   Bắt trường hợp lỗi
            .catch((err) => console.log(err))
    }
    const getFetchUsers = () => {
        fetch("http://localhost:4000/users")
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    }
    const postFetchUsers = () => {
        fetch("http://localhost:4000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    id: "SV007",
                    name: "Nguyễn Trọng Nhân",
                    age: 20,
                    gender: true,
                    birthday: "20/5/1998",
                    address: "số 1 Tây Hồ"
                }
            )
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    }
    const putFetchUsers = () => {
        fetch("http://localhost:4000/users/4", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    id: "SV004",
                    name: "Nguyễn Văn A",
                    age: 15,
                    gender: false,
                    birthday: "20/4/2000",
                    address: "Số 1 Âu Cơ"
                }
            )
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <h3>DemoFetchApi Products</h3>
            <button onClick={getFetch}>Get API in Fetch</button>
            <button onClick={postFetch}>Get API in Fetch</button>
            <button onClick={putFetch}>Get API in Fetch</button>

            <h3>DemoFetchApi Users</h3>
            <button onClick={getFetchUsers}>Get API in Fetch</button>
            <button onClick={postFetchUsers}>Post API in Fetch</button>
            <button onClick={putFetchUsers}>Put API in Fetch</button>
        </div>

    )
}
