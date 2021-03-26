const   ALL_REGISTER        = 0,
        BYTE_REGISTER       = 1,
        WORD_NS_REGISTER    = 2,
        SEGMENT_REGISTER    = 3;


class Registers{
    constructor() {
        this.R = new Array(14);

        for (let i = 0; i < 14; i++) 
            this.R[i] = 0;
    }

    readReg(registerId){
        
        return this.R[registerId];
    }

    readSegReg(registerSegId){
        var registerId = SEGMENT_REGISTERS_TABLE[registerSegId];

        return this.R[registerId];
    }

    readByteReg(registerByteId){
        var registerId = WORD_REGISTERS_TABLE[registerByteId%4],
            HighByte = (registerByteId >> 2) % 1;

        if (HighByte)  //AH, BH, CH, DH
            return (this.R[registerId] & 0xFF00) >> 8;
        else
            return (this.R[registerId] & 0x00FF);
        
    }

    readWordReg(registerWordId){
        var registerId = WORD_REGISTERS_TABLE[registerWordId];

        return this.R[registerId];
    }

    writeReg(registerId, value){
        this.R[registerId] = value;
    }

    writeSegReg(registerSegId, value){
        var registerId = SEGMENT_REGISTERS_TABLE[registerSegId];

        this.R[registerId] = value;
    }

    writeByteReg(registerByteId, value){
        var registerId = WORD_REGISTERS_TABLE[registerByteId%4],
            HighByte = (registerByteId >> 2) % 1;

        if (value >> 8 != 0) {
            console.log("Error: Trying to write a word value in a byte register.");
            value %= 256;
        }


        if (HighByte)  //AH, BH, CH, DH
        {
            this.R[registerId] &= 0x00FF;
            this.R[registerId] |= (value << 8) ;
        }   
        else
        {
            this.R[registerId] &= 0xFF00;
            this.R[registerId] |= value;
        }
            
        
    }

    writeWordReg(registerWordId, value){
        var registerId = WORD_REGISTERS_TABLE[registerWordId];

        this.R[registerId] = value;
    }

    movRegTyped(registerId_1, registerId_2, type1, type2)
    {
        if (type1 != type2 && type1 == BYTE_REGISTER) 
            console.log("Error: Word-Byte operation on register detected");

        else if (type1 == BYTE_REGISTER)
        {
            let val = this.readByteReg(registerId_2);
            this.writeByteReg(registerId_1, val);
        }

        else if(type1 == SEGMENT_REGISTER)
        {
            let val = this.readWordReg(registerId_2);
            this.writeSegReg(registerId_1);
        }

        else if(type2 == SEGMENT_REGISTER)
        {
            let val = this.writeSegReg(registerId_2);
            this.readWordReg(registerId_1);
        }

        else
        {
            let val = this.readWordReg(registerId_2);
            this.readWordReg(registerId_1);
        }
        
    }
}

const   SEGMENT_REGISTERS_TABLE = [ES, CS, SS, DS],
        WORD_REGISTERS_TABLE = [AX, CX, DX, BX, SP, BP, SI, DI];

const   AX = 0,
        BX = 1,
        CX = 2,
        DX = 3,
        CS = 4,
        DS = 5,
        ES = 6,
        SS = 7,
        SP = 8,
        BP = 9,
        DI = 10,
        SI = 11,
        FLAG = 12,
        IP = 13;