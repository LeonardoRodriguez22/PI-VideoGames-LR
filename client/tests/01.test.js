import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { mount, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Forms from "../src/componets/Forms/Forms.jsx";
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";

configure({ adapter: new Adapter() });

describe("01 | Formulario", () => {
  let Forms, useState, useStateSpy;
  const mockStore = configureStore();
  beforeEach(() => {
    //mockeamos useDispatch
    const mockDispatch = jest.fn();
    jest.mock("react-redux", () => ({
        useDispatch: () => mockDispatch,
    }));

    useState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(() => [
      {
        name: "",
        description: "",
        rating: "",
        platforms: "",
        releaseDate: "",
        image: "",
        genre: [],
      },
      useState,
    ]);
    const store = mockStore({})
    Forms = mount(
      <Provider store={store}>
        <Forms />
      </Provider>
    );
    expect(Forms).toBeTruthy();
  });


  it("El componente Forms debe tener un estado local que sea un objeto, con las propiedades name, description, rating, platforms, releaseDate, image, genre", () => {
    expect(useStateSpy).toHaveBeenCalledWith({
        name: "",
        description: "",
        rating: "",
        platforms: "",
        releaseDate: "",
        image: "",
        genre: [],
    });
  });

  it("Dentro del componente Forms debería existir una función llamada changeHandler que se encargue de manejar el estado", () => {
    let wrapper = Forms.find("input[name='name']").simulate("change", {
      target: {
        value: "Leonardo",
        name:"name",
      },
    });
    expect(useState).toHaveBeenCalledWith({
        name: "Leonardo",
        description: "",
        rating: "",
        platforms: "",
        releaseDate: "",
        image: "",
        genre: [],
    });
    wrapper = Forms.find("input[name='description']").simulate("change", {
      target: {
        value: "este es un videojuego dedicado al testt",
        name: "description",
      },
    });
    expect(useState).toHaveBeenCalledWith({
        name: "",
        description: "este es un videojuego dedicado al testt",
        rating: "",
        platforms: "",
        releaseDate: "",
        image: "",
        genre: [],
    });
    wrapper = Forms.find("input[name='rating']").simulate("change", {
      target: {
        value: "3",
        name: "rating",
      },
    });
    expect(useState).toHaveBeenCalledWith({
        name: "",
        description: "",
        rating: "3",
        platforms: "",
        releaseDate: "",
        image: "",
        genre: [],
    });
    wrapper = contactUs.find("input[name='Platforms']").simulate("change", {
      target: {
        value: "PC",
        name: "Platforms",
      },
    });
    expect(useState).toHaveBeenCalledWith({
        name: "",
        description: "",
        rating: "",
        platforms: "PC",
        releaseDate: "",
        image: "",
        genre: [],
    });
  });
});
