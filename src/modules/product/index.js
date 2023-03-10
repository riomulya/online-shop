import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p1',
          image: 'https://source.unsplash.com/random/1000x800/?cosmetic',
          name: 'Cosmetic',
          price: 4.22,
          desc: 'lorem Ipsum dolor sit amet',
        },
        {
          id: 'p2',
          image: 'https://source.unsplash.com/random/1000x800/?bicyle',
          name: 'bicyle',
          price: 100.99,
          desc: 'lorem Ipsum dolor sit amet',
        },
        {
          id: 'p3',
          image: 'https://source.unsplash.com/random/1000x800/?chair',
          name: 'chair',
          price: 40.99,
          desc: 'lorem Ipsum dolor sit amet',
        },
        {
          id: 'p4',
          image: 'https://source.unsplash.com/random/1000x800/?table',
          name: 'table',
          price: 40.99,
          desc: 'lorem Ipsum dolor sit amet',
        },
        {
          id: 'p5',
          image: 'https://source.unsplash.com/random/1000x800/?car',
          name: 'car',
          price: 40000.99,
          desc: 'lorem Ipsum dolor sit amet',
        },
        {
          id: 'p6',
          image: 'https://source.unsplash.com/random/1000x800/?laptop',
          name: 'laptop',
          price: 4000.99,
          desc: 'lorem Ipsum dolor sit ametlorem Ipsum dolor sit ametlorem Ipsum dolor sit ametlorem Ipsum dolor sit ametlorem Ipsum dolor sit ametlorem Ipsum dolor sit ametlorem Ipsum dolor sit ametlorem Ipsum dolor sit ametlorem Ipsum dolor sit ametlorem Ipsum dolor sit ametlorem Ipsum dolor sit ametlorem Ipsum dolor sit ametlorem Ipsum dolor sit ametlorem Ipsum dolor sit amet',
        },
      ],
      reviews: [
        {
          id: 'r1',
          idProduct: 'p6',
          name: 'Owi Slebew',
          rating: '5',
          opinion: 'great product great delivery and amazing quality product',
        },
        {
          id: 'r2',
          idProduct: 'p6',
          name: 'Roro Slebew',
          rating: '5',
          opinion: 'great product great delivery and amazing quality product',
        },
        {
          id: 'r4',
          idProduct: 'p3',
          name: 'Rorona Slebew',
          rating: '4.5',
          opinion: 'great product great delivery and amazing quality product',
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
