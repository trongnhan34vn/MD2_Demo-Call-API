import React from 'react'
import axios from "axios"

export default function DemoAxios() {
    const data = { id: 9, name: "Minh béo", age: "11", birthday: "20/4/2022", address: "số 1 Trần Duy Hưng" }
    const getAxios = () => {
        const db = axios.get("http://localhost:4000/users")
            .then(res => console.log(res.data))
    }
    const delAxios = () => {
        axios
            .delete("http://localhost:4000/users/9")
            .then(res => console.log(res.data))
    }
    const postAxios = () => {
        axios.post("http://localhost:4000/users", data)
            .then(res => console.log(res))
    }
    const putAxios = () => {
        const updateData = {
            "id": 1,
            "name": "John",
            "age": 14,
            "gender": false,
            "birthday": "09/02/2020",
            "address": "số 1 Hàng Khay"
        }
        axios.put("http://localhost:4000/users/1", updateData)
            .then(res => console.log(res.data))
    }
    const patchAxios = () => {
        axios.patch("http://localhost:4000/users/2", { name: "John", age: 20 })
            .then(res => console.log(res.data))
    }
    return (
        <div>
            <h3>Demo Axios</h3>
            <button onClick={getAxios}>Get Axios</button>
            <button onClick={delAxios}>Del Axios</button>
            <button onClick={postAxios}>Post Axios</button>
            <button onClick={putAxios}>Put Axios</button>
            <button onClick={patchAxios}>Patch Axios</button>
        </div>
    )
}
