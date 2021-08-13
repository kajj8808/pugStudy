const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('template', {
        name: 'kajj8808!',
        link: 'https://www.animate-onlineshop.co.kr/goods/goods_view.php?goodsNo=1000015501',
        image: 'http://animate.godohosting.com/Goods/4573592681194.jpg',
        option : "author",
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    });
});

app.listen(4000, () => {
    console.log('server on ready!');
});
