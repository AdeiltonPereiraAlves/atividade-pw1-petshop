import {v4 } from 'uuid'

export default class Id {
    static gerar(){
        return v4()
    }
}