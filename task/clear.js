// удаление директории перед сборкой
import del from 'del';

//конфигурация 
import path from '../config/path.js';

function clear () {
    return del(path.root);
}
export default clear;