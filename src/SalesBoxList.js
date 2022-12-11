import { SalesBox } from './SalesBox';

export function SalesBoxList({ like, setLike }) {
    const salesData = [{
        name: "Fancy Products",
        price: "$40.00 - 80.00",
        price1: null,
        buttonVal: "View options",
        stars: null,
        imageSrc: "https://keralainformation.com/directory/wp-content/uploads/2015/12/gift.jpg",
    },
    {
        name: "Special Item",
        price1: "$20.00",
        price: "$18.00",
        buttonVal: "Add to cart",
        stars: "⭐⭐⭐⭐⭐",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreCceZgAcJvzdg1Ej6FBi_lA_mn4cP0yAIw&usqp=CAU",
    },
    {
        name: "Sale Item",
        price1: "$50.00",
        price: "$25.00",
        buttonVal: "Add to cart",
        stars: null,
        imageSrc: "https://www.annaijewellers.com/wp-content/uploads/2019/02/Fancy-Gift-7-2.jpg",
    },
    {
        name: "Popular Item",
        price: "$40.00",
        price1: null,
        buttonVal: "Add to cart",
        stars: "⭐⭐⭐⭐⭐",
        imageSrc: "https://www.kindpng.com/picc/m/22-226920_gift-items-in-png-transparent-png.png",
    }
    ];

    const salesData1 = [
        {
            name: "Sale Item",
            price1: "$50.00",
            price: "$25.00",
            buttonVal: "Add to cart",
            stars: null,
            imageSrc: "https://www.annaijewellers.com/wp-content/uploads/2019/02/Fancy-Gift-7-2.jpg",
        },
        {
            name: "Fancy Products",
            price: "$120.00 - 280.00",
            price1: null,
            buttonVal: "View options",
            stars: null,
            imageSrc: "https://keralainformation.com/directory/wp-content/uploads/2015/12/gift.jpg",
        },
        {
            name: "Special Item",
            price1: "$20.00",
            price: "$18.00",
            buttonVal: "Add to cart",
            stars: "⭐⭐⭐⭐⭐",
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreCceZgAcJvzdg1Ej6FBi_lA_mn4cP0yAIw&usqp=CAU",
        },

        {
            name: "Popular Item",
            price: "$40.00",
            price1: null,
            buttonVal: "Add to cart",
            stars: "⭐⭐⭐⭐⭐",
            imageSrc: "https://www.kindpng.com/picc/m/22-226920_gift-items-in-png-transparent-png.png",
        }
    ];
    return (
        <div className='sales-box-list-container'>
            {salesData.map((dt) => <SalesBox data={dt} like={like} setLike={setLike} />)}
            {salesData1.map((dt) => <SalesBox data={dt} like={like} setLike={setLike} />)}
        </div>
    );
}
