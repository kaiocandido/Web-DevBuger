import { useEffect } from "react"
import { api } from "../../services/api"
import { useState } from "react"

export function CategoriesCarousel(params) {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories')

            setCategories(data)
            console.log(data)
        }

        loadCategories()
    }, [])

    return (
        <div>
            <h1>Ok</h1>
        </div>
    )
}