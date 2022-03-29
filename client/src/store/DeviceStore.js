import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Холодильник' },
      { id: 2, name: 'Смартфон' },
      { id: 3, name: 'Ноутбуки' },
      { id: 4, name: 'Телевизоры' },
    ];

    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
      { id: 3, name: 'Apple' },
      { id: 4, name: 'Apple' },
    ];

    this._device = [
      {
        id: 1,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: `https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.imgmobile.com%2F&psig=AOvVaw3zYQwEtbh0xWK5g15Cfv19&ust=1648577706831000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiTiNe06fYCFQAAAAAdAAAAABAD`,
      },
      {
        id: 2,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: `https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.imgmobile.com%2F&psig=AOvVaw3zYQwEtbh0xWK5g15Cfv19&ust=1648577706831000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiTiNe06fYCFQAAAAAdAAAAABAD`,
      },
      {
        id: 3,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: `https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.imgmobile.com%2F&psig=AOvVaw3zYQwEtbh0xWK5g15Cfv19&ust=1648577706831000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiTiNe06fYCFQAAAAAdAAAAABAD`,
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: `https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.imgmobile.com%2F&psig=AOvVaw3zYQwEtbh0xWK5g15Cfv19&ust=1648577706831000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiTiNe06fYCFQAAAAAdAAAAABAD`,
      },
      {
        id: 5,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: `https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.imgmobile.com%2F&psig=AOvVaw3zYQwEtbh0xWK5g15Cfv19&ust=1648577706831000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiTiNe06fYCFQAAAAAdAAAAABAD`,
      },
      {
        id: 6,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: `https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.imgmobile.com%2F&psig=AOvVaw3zYQwEtbh0xWK5g15Cfv19&ust=1648577706831000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiTiNe06fYCFQAAAAAdAAAAABAD`,
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }

  setDevice(device) {
    this._device = device;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }
  // Геттеры чтобы получать данные из нашего состояния

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }

  get devices() {
    return this._device;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
