import {nanoid} from "nanoid";

const CreateObjArray = () => {
    let objArrayBox = [];

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            objArrayBox.push({
                box: 'box',
                isItem: false,
                id: nanoid(),
            })
        }
    }

    const rand = Math.floor((Math.random() * objArrayBox.length));
    objArrayBox[rand].isItem = true;
    console.log(rand);
    return objArrayBox;
};

export default CreateObjArray;
