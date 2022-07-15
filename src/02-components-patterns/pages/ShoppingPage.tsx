import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components"

import "../styles/customs-styless.css";

const product = {
    id: "1",
    title: "coffe Mug",
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }}>
                {/*
                 Puedes usar las dos formas al mismo tiempo y ke daras mas
                 soporte a los usuarios o desarraolladores
                 /> */
                }
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title="mause" />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard
                    className="bg-dark"
                    product={product}
                >
                    <ProductImage />
                    <ProductTitle
                        title="coup"
                        className="text-white"
                    />
                    <ProductButtons className="border-light  text-white flex items-center" />

                </ProductCard>

                <ProductCard
                    product={product}
                    style={{ borderTop: "5px solid gold", backgroundColor: "#2c2b2b", color: "white" }}
                >
                    <ProductImage />
                    <ProductTitle
                        title="coup"
                    />
                    <ProductButtons style={{ boxShadow: "1px 2px 3px #ccc" }} />
                </ProductCard>
            </div>
        </div>
    )
}
