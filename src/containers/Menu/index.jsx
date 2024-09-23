import { useEffect, useState } from "react"
import { Container, Banner, CategoriesMenu, ProductsContainer, CategoryButton } from "./styles"
import { api } from "../../services/api"
import { CardProduct } from "../../components/CardProduct"
import { FormatPrice } from "../../Utils/FormatPrice"
import { useLocation, useNavigate } from "react-router-dom"

export function Menu() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const [filteredProducts, setFilteredProducts] = useState([])
    const { search } = useLocation()
    const queryParams = new URLSearchParams(search)
    const [activeCategory, setActiveCategory] = useState(() => {
        const categoryId = +queryParams.get("categoria")
        if (categoryId) {
            return categoryId
        }
        return 0
    })

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories')
            const newCatergories = [{
                id: 0,
                name: 'Todas'
            }, ...data]
            setCategories(newCatergories)
        }
        async function loadProducts() {
            const { data } = await api.get('/products')
            const newProducts = data.map(product => ({
                currencyValeu: FormatPrice(product.price),
                ...product,
            })
            )
            setProducts(newProducts)
        }

        loadProducts()
        loadCategories()
    }, [])

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products)
        } else {
            const newFilter = products.filter(
                (product) => product.category_id === activeCategory,
            )
            setFilteredProducts(newFilter)
        }
    }, [products, activeCategory])

    return (
        <Container>
            <Banner>
                <h1>O MELHOR
                    <br />
                    HAMBURGUER
                    <br />
                    ESTA AQUI
                    <span>Esse cardapio está irresistível!</span>
                </h1>
            </Banner>
            <CategoriesMenu>
                {categories.map(category => (
                    <CategoryButton
                        $isActiveCategory={category.id === activeCategory}
                        key={category.id}
                        onClick={() => {
                            navigate(
                                {
                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`,
                                },
                                {
                                    replace: true,
                                },
                            )
                            setActiveCategory(category.id)
                        }}
                    >{category.name}</CategoryButton>
                ))}
            </CategoriesMenu>
            <ProductsContainer>
                {filteredProducts.map(product => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </ProductsContainer>
        </Container>
    )
}
