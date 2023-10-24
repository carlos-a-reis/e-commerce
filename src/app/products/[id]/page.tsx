type ProductProps = {
  params: {
    id: string
  }
}

export default async function Product({ params }: ProductProps) {
  const response = await fetch(`https://dummyjson.com/products/${params.id}`)
  const product = await response.json()

  return <p>{product.images[0]}</p>
}
