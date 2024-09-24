import MenuItem from "./MenuItem";
import Separator from "./Separator"

const menuTiems = [
    {
        imgSrc: "/assets/menu/coffee-1.png",
        name: "Espresso",
        description: "Rich and bold shot of coffee",
        price: 59,
    },
    {
        imgSrc: "/assets/menu/coffee-2.png",
        name: "Cappuccino",
        description: "Espresso with steamed milk and foam",
        price: 69,
    },
    {
        imgSrc: "/assets/menu/coffee-3.png",
        name: "Latte",
        description: "Espresso with steamed milk",
        price: 69,
    },
    {
        imgSrc: "/assets/menu/coffee-4.png",
        name: "Americano",
        description: "Espresso with hot water",
        price: 69,
    },
    {
        imgSrc: "/assets/menu/coffee-5.png",
        name: "Mocha",
        description: "Espresso with chocolate and steamed milk",
        price: 69,
    },
    {
        imgSrc: "/assets/menu/coffee-1.png",
        name: "Macchiato",
        description: "Espresso with a dollop of foam",
        price: 69,
    },
    {
        imgSrc: "/assets/menu/coffee-2.png",
        name: "Flat White",
        description: "Espresso with microfoam milk",
        price: 69,
    },
    {
        imgSrc: "/assets/menu/coffee-3.png",
        name: "Iced Coffee",
        description: "Chilled coffee over ice",
        price: 69,
    },
    {
        imgSrc: "/assets/menu/coffee-4.png",
        name: "Affogato",
        description: "Espresso shot over vanilla ice cream",
        price: 69,
    },
    {
        imgSrc: "/assets/menu/coffee-5.png",
        name: "Irish Coffee",
        description: "Coffee with Irish and cream",
        price: 69,
    },

]

const Menu = () => {
  return (
    <section className="pt-12 pb-16 xl:pt-16 xl:pb-36">
        <div className="container mx-auto">
            <div className="flex flex-col gap-4 mb-12 xl:mb-24">
                <h2 className="h2 text-center">Menu</h2>
                <div className="mb-4">
                    <Separator bg="accent" />
                </div>
                <p className="text-center max-w-[620px] mx-auto">
                สัมผัสกับเมนูกาแฟชั้นเลิศที่ทางเราได้รังสรรค์ด้วยความหลงใหลพร้อมกับอัตราค่าบริการให้กับนักดื่มกาแฟทุกท่าน.</p>
            </div>
            {/* menu & btn */}
            <div className="flex flex-col items-center gap-12 xl:gap-24">
                {/* menu grid*/}
                <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center">
                    {menuTiems.map((item, index) => {
                        const { name, description, price, imgSrc } = item;
                        return (
                            <MenuItem 
                                name={name}
                                description={description}
                                price={price}
                                imgSrc={imgSrc}
                                key={index}
                            />
                        );
                    })}
                </div>
                <button className="btn">View full Menu</button>
            </div>
        </div>
    </section>
  )
}

export default Menu
