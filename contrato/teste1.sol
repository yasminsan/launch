
pragma solidity ^0.8.14;
contract Contract {
    function main() {
        memory[0x40:0x60] = 0x80;
    
        if (msg.data.length < 0x04) { revert(memory[0x00:0x00]); }
    
        var myaddress = msg.data[0x00:0x20] >> 0xe0;
    
        if (0x787e3c5e > myaddress) { //var0 == myaddress, é uma var tipo address
            if (myaddress == cost()) {
                // Dispatch table entry for cost()
                var var1 = msg.value;
            
                if (var1) { revert(memory[0x00:0x00]); }
            
                var1 = 0x0000c7;
                var var2 = func_02BD();
                var temp0 = var2;
                var2 = 0x0000d6;
                var var3 = temp0;
                var var4 = memory[0x40:0x60];
                var2 = func_10EC(var3, var4);
                var temp1 = memory[0x40:0x60];
                return memory[temp1:temp1 + var2 - temp1];
            } else if (myaddress == beneficiary()) {
                // Dispatch table entry for beneficiary()
                var1 = msg.value;
            
                if (var1) { revert(memory[0x00:0x00]); }
            
                var1 = 0x0000f7;
                var2 = func_02C3();
                var temp2 = var2;
                var2 = 0x000106;
                var3 = temp2;
                var4 = memory[0x40:0x60];
                var2 = func_0F1D(var3, var4);
                var temp3 = memory[0x40:0x60];
                return memory[temp3:temp3 + var2 - temp3];
            } else if (myaddress == 0x3c40ca28) {
                // Dispatch table entry for 0x3c40ca28 (unknown)
                var1 = msg.value;
            
                if (var1) { revert(memory[0x00:0x00]); }
            
                var1 = 0x000127;
                var2 = func_02E9();
                var temp4 = var2;
                var2 = 0x000136;
                var3 = temp4;
                var4 = memory[0x40:0x60];
                var2 = func_10EC(var3, var4);
                var temp5 = memory[0x40:0x60];
                return memory[temp5:temp5 + var2 - temp5];
            } else if (myaddress == 0x3ccfd60b) {
                // Dispatch table entry for withdraw()
                var1 = msg.value;
            
                if (var1) { revert(memory[0x00:0x00]); }
            
                var1 = 0x000157;
                withdraw();
                stop();
            } else if (myaddress == 0x5cb85cd2) {
                // Dispatch table entry for changeCost(uint256)
                var1 = msg.value;
            
                if (var1) { revert(memory[0x00:0x00]); }
            
                var1 = 0x000185;
                var2 = 0x00017f;
                var4 = 0x04;
                var3 = var4 + (msg.data.length - var4);
                var2 = func_0D5D(var3, var4);
                func_017F(var2);
                stop();
            } else { revert(memory[0x00:0x00]); }
        } else if (myaddress == 0x787e3c5e) {
            // Dispatch table entry for 0x787e3c5e (unknown)
            var1 = 0x0001a5;
            var2 = 0x00019f;
            var3 = msg.data.length - 0x04 + 0x04;
            var4 = 0x04;
            var var5;
            var var6;
            var var7;
            var var8;
            var2, var3, var4, var5, var6, var7, var8 = func_0C7E(var3, var4);
            var1 = func_019F(var2, var3, var4, var5, var6, var7, var8);
            var temp6 = var1;
            var1 = 0x0001b4;
            var2 = temp6;
            var3 = memory[0x40:0x60];
            var1 = func_0F1D(var2, var3);
            var temp7 = memory[0x40:0x60];
            return memory[temp7:temp7 + var1 - temp7];
        } else if (myaddress == 0x8da5cb5b) {
            // Dispatch table entry for owner()
            var1 = msg.value;
        
            if (var1) { revert(memory[0x00:0x00]); }
        
            var1 = 0x0001d5;
            var2 = func_0784();
            var temp8 = var2;
            var2 = 0x0001e4;
            var3 = temp8;
            var4 = memory[0x40:0x60];
            var2 = func_0F1D(var3, var4);
            var temp9 = memory[0x40:0x60];
            return memory[temp9:temp9 + var2 - temp9];
        } else if (myaddress == 0x949e8acd) {
            // Dispatch table entry for myTokens()
            var1 = msg.value;
        
            if (var1) { revert(memory[0x00:0x00]); }
        
            var1 = 0x000205;
            var1 = func_07A8();
            var temp10 = var1;
            var1 = 0x000214;
            var2 = temp10;
            var3 = memory[0x40:0x60];
            var1 = func_0F3A(var2, var3);
            var temp11 = memory[0x40:0x60];
            return memory[temp11:temp11 + var1 - temp11];
        } else if (myaddress == 0xa03c7084) {
            // Dispatch table entry for 0xa03c7084 (unknown)
            var1 = msg.value;
        
            if (var1) { revert(memory[0x00:0x00]); }
        
            var1 = 0x000249;
            var2 = 0x000243;
            var3 = msg.data.length - 0x04 + 0x04;
            var4 = 0x04;
            var2, var3 = func_0C3D(var3, var4);
            var2 = func_0243(var2, var3);
            var temp12 = var2;
            var2 = 0x000258;
            var3 = temp12;
            var4 = memory[0x40:0x60];
            var2 = func_0F1D(var3, var4);
            var temp13 = memory[0x40:0x60];
            return memory[temp13:temp13 + var2 - temp13];
        } else if (myaddress == 0xa6f9dae1) {
            // Dispatch table entry for changeOwner(address)
            var1 = msg.value;
        
            if (var1) { revert(memory[0x00:0x00]); }
        
            var1 = 0x00028d;
            var2 = 0x000287;
            var4 = 0x04;
            var3 = var4 + (msg.data.length - var4);
            var2 = func_0C11(var3, var4);
            func_0287(var2);
            stop();
        } else if (myaddress == 0xdc070657) {
            // Dispatch table entry for changeBeneficiary(address)
            var1 = msg.value;
        
            if (var1) { revert(memory[0x00:0x00]); }
        
            var1 = 0x0002bb;
            var2 = 0x0002b5;
            var3 = msg.data.length - 0x04 + 0x04;
            var4 = 0x04;
            var2 = func_0C11(var3, var4);
            func_02B5(var2);
            stop();
        } else { revert(memory[0x00:0x00]); }
    }
    
    function func_017F(var arg0) {
        if (msg.sender == storage[0x00] & 0xffffffffffffffffffffffffffffffffffffffff) {
            storage[0x02] = arg0;
            var myaddress = Cost(uint256);
// ver esse negócio aqui uint256
            var var1 = 0x0004bb;
            var var3 = memory[0x40:0x60];
            var var2 = arg0;
            var1 = func_10EC(var2, var3);
            var temp0 = memory[0x40:0x60];
            log(memory[temp0:temp0 + var1 - temp0], [stack[-2]]);
            return;
        } else {
            var temp1 = memory[0x40:0x60];
            memory[temp1:temp1 + 0x20] = 0x08c379a000000000000000000000000000000000000000000000000000000000;
            var1 = temp1 + 0x04;
            myaddress = 0x00047a;
            myaddress = func_10CA(var1);
            var temp2 = memory[0x40:0x60];
            revert(memory[temp2:temp2 + myaddress - temp2]);
        }
    }
    
    function func_019F(var arg0, var arg1, var arg2, var arg3, var arg4, var arg5, var arg6) returns (var r0) {
        var myaddress = 0x00;
    
        if (arg5 > arg3) {
            var temp23 = memory[0x40:0x60];
            memory[temp23:temp23 + 0x20] = 0x08c379a000000000000000000000000000000000000000000000000000000000;
            var2 = temp23 + 0x04;
            var1 = 0x000505;
            var1 = func_1086(var2);
            var temp24 = memory[0x40:0x60];
            revert(memory[temp24:temp24 + var1 - temp24]);
        } else if (arg4 > 0x03e8) {
            var temp21 = memory[0x40:0x60];
            memory[temp21:temp21 + 0x20] = 0x08c379a000000000000000000000000000000000000000000000000000000000;
            var2 = temp21 + 0x04;
            var1 = 0x00054d;
            var1 = func_1064(var2);
            var temp22 = memory[0x40:0x60];
            revert(memory[temp22:temp22 + var1 - temp22]);
        } else if (msg.value < storage[0x02]) {
            var temp19 = memory[0x40:0x60];
            memory[temp19:temp19 + 0x20] = 0x08c379a000000000000000000000000000000000000000000000000000000000;
            var2 = temp19 + 0x04;
            var1 = 0x000595;
            var1 = func_10A8(var2);
            var temp20 = memory[0x40:0x60];
            revert(memory[temp20:temp20 + var1 - temp20]);
        } else if (msg.value <= storage[0x02]) {
        label_0601:
            var var1 = 0x00;
            var var2 = arg0;
            var var3 = arg1;
            var var4 = arg2;
            var var5 = arg3;
            var var6 = arg4;
            var var7 = arg5;
            var var8 = arg6;
            var var10 = memory[0x40:0x60];
            var var9 = 0x000618;
            var9 = func_0B63(var10);
            var temp0 = var2;
            var2 = 0x00062a;
            var temp1 = var3;
            var3 = temp0;
            var temp2 = var4;
            var4 = temp1;
            var temp3 = var5;
            var5 = temp2;
            var temp4 = var6;
            var6 = temp3;
            var temp5 = var7;
            var7 = temp4;
            var temp6 = var8;
            var8 = temp5;
            var temp7 = var9;
            var9 = temp6;
            var10 = temp7;
            var2 = func_0FD9(var3, var4, var5, var6, var7, var8, var9, var10);
            var temp8 = memory[0x40:0x60];
            var temp9 = new(memory[temp8:temp8 + var2 - temp8]).value(0x00)();
            var2 = temp9;
            var3 = !var2;
        
            if (!var3) {
                var1 = var2;
                memory[0x00:0x20] = msg.sender;
                memory[0x20:0x40] = 0x04;
                var temp10 = keccak256(memory[0x00:0x40]);
                var temp11 = storage[temp10] + 0x01;
                storage[temp10] = temp11;
                memory[0x00:0x20] = temp10;
                var temp12 = keccak256(memory[0x00:0x20]) + (temp11 - 0x01);
                storage[temp12] = (var1 & 0xffffffffffffffffffffffffffffffffffffffff) | (storage[temp12] & ~0xffffffffffffffffffffffffffffffffffffffff);
                var2 = storage[0x03];
                var3 = 0x03;
                var4 = 0x00;
                var6 = var2;
                var5 = 0x0006ff;
                var5 = func_12B1(var6);
                storage[var3] = var5;
                var2 = var1 & 0xffffffffffffffffffffffffffffffffffffffff;
                var3 = msg.sender;
                var4 = 0x545e893dd3da1d713637212939d8e88d928bf255857b067b97f5aaf4f3b31abe;
                var5 = 0x00076d;
                var6 = arg0;
                var7 = arg1;
                var8 = arg2;
                var9 = arg3;
                var10 = arg4;
                var var12 = memory[0x40:0x60];
                var var11 = arg5;
                var5 = func_0F5E(var6, var7, var8, var9, var10, var11, var12);
                var temp13 = memory[0x40:0x60];
                log(memory[temp13:temp13 + var5 - temp13], [stack[-2], stack[-3], stack[-4]]);
                return var1;
            } else {
                var temp14 = returndata.length;
                memory[0x00:0x00 + temp14] = returndata[0x00:0x00 + temp14];
                revert(memory[0x00:0x00 + returndata.length]);
            }
        } else {
            var1 = msg.sender;
            var2 = 0x08fc;
            var3 = 0x0005d3;
            var5 = msg.value;
            var4 = storage[0x02];
            var3 = func_11BD(var4, var5);
            var temp15 = var3;
            var temp16 = memory[0x40:0x60];
            var temp17;
            temp17, memory[temp16:temp16 + 0x00] = address(var1).call.gas(!temp15 * var2).value(temp15)(memory[temp16:temp16 + memory[0x40:0x60] - temp16]);
            var1 = !temp17;
        
            if (!var1) { goto label_0601; }
        
            var temp18 = returndata.length;
            memory[0x00:0x00 + temp18] = returndata[0x00:0x00 + temp18];
            revert(memory[0x00:0x00 + returndata.length]);
        }
    }
    
    function func_0243(var arg0, var arg1) returns (var arg0) {
        memory[0x20:0x40] = 0x04;
        memory[0x00:0x20] = arg0;
        var myaddress = keccak256(memory[0x00:0x40]);
        var var1 = arg1;
    
        if (var1 >= storage[myaddress]) { revert(memory[0x00:0x00]); }
    
        memory[0x00:0x20] = myaddress;
        return storage[keccak256(memory[0x00:0x20]) + var1] & 0xffffffffffffffffffffffffffffffffffffffff;
    }
    
    function func_0287(var arg0) {
        if (msg.sender == storage[0x00] & 0xffffffffffffffffffffffffffffffffffffffff) {
            var temp0 = arg0;
            var temp1 = memory[0x40:0x60];
            log(memory[temp1:temp1 + memory[0x40:0x60] - temp1], [0x342827c97908e5e2f71151c08502a66d44b6f758e3ac2f1de95f02eb95f0a735, storage[0x00] & 0xffffffffffffffffffffffffffffffffffffffff, stack[-1] & 0xffffffffffffffffffffffffffffffffffffffff]);
            storage[0x00] = (temp0 & 0xffffffffffffffffffffffffffffffffffffffff) | (storage[0x00] & ~0xffffffffffffffffffffffffffffffffffffffff);
            return;
        } else {
            var temp2 = memory[0x40:0x60];
            memory[temp2:temp2 + 0x20] = 0x08c379a000000000000000000000000000000000000000000000000000000000;
            var var1 = temp2 + 0x04;
            var myaddress = 0x00094c;
            myaddress = func_10CA(var1);
            var temp3 = memory[0x40:0x60];
            revert(memory[temp3:temp3 + myaddress - temp3]);
        }
    }
    
    function func_02B5(var arg0) {
        if (msg.sender == storage[0x00] & 0xffffffffffffffffffffffffffffffffffffffff) {
            var temp0 = arg0;
            storage[0x01] = (temp0 & 0xffffffffffffffffffffffffffffffffffffffff) | (storage[0x01] & ~0xffffffffffffffffffffffffffffffffffffffff);
            var temp1 = memory[0x40:0x60];
            log(memory[temp1:temp1 + memory[0x40:0x60] - temp1], [0x2906d223dc4163733bb374af8641c7e9ae256e2bae53c90e0c9a2be2e611ae44, storage[0x01] & 0xffffffffffffffffffffffffffffffffffffffff, stack[-1] & 0xffffffffffffffffffffffffffffffffffffffff]);
            return;
        } else {
            var temp2 = memory[0x40:0x60];
            memory[temp2:temp2 + 0x20] = 0x08c379a000000000000000000000000000000000000000000000000000000000;
            var var1 = temp2 + 0x04;
            var myaddress = 0x000a9a;
            myaddress = func_10CA(var1);
            var temp3 = memory[0x40:0x60];
            revert(memory[temp3:temp3 + myaddress - temp3]);
        }
    }
    
    function func_02BD() returns (var r0) { return storage[0x02]; }
    
    function func_02C3() returns (var r0) { return storage[0x01] & 0xffffffffffffffffffffffffffffffffffffffff; }
    
    function func_02E9() returns (var r0) { return storage[0x03]; }
    
    function withdraw() {
        if (msg.sender == storage[0x00] & 0xffffffffffffffffffffffffffffffffffffffff) {
            var temp0 = address(this).balance;
            var myaddress = temp0;
            var temp1 = memory[0x40:0x60];
            var temp2;
            temp2, memory[temp1:temp1 + 0x00] = address(storage[0x01] & 0xffffffffffffffffffffffffffffffffffffffff).call.gas(!myaddress * 0x08fc).value(myaddress)(memory[temp1:temp1 + memory[0x40:0x60] - temp1]);
            var var1 = !temp2;
        
            if (!var1) { return; }
        
            var temp3 = returndata.length;
            memory[0x00:0x00 + temp3] = returndata[0x00:0x00 + temp3];
            revert(memory[0x00:0x00 + returndata.length]);
        } else {
            var temp4 = memory[0x40:0x60];
            memory[temp4:temp4 + 0x20] = 0x08c379a000000000000000000000000000000000000000000000000000000000;
            var1 = temp4 + 0x04;
            myaddress = 0x000377;
            myaddress = func_10CA(var1);
            var temp5 = memory[0x40:0x60];
            revert(memory[temp5:temp5 + myaddress - temp5]);
        }
    }
    
    function func_0784() returns (var r0) { return storage[0x00] & 0xffffffffffffffffffffffffffffffffffffffff; }
    
    function func_07A8() returns (var r0) {
        var myaddress = 0x60;
        memory[0x00:0x20] = msg.sender;
        memory[0x20:0x40] = 0x04;
        var temp0 = keccak256(memory[0x00:0x40]);
        var temp1 = storage[temp0];
        var temp2 = memory[0x40:0x60];
        memory[0x40:0x60] = temp2 + temp1 * 0x20 + 0x20;
        var var1 = temp2;
        var var2 = temp0;
        var var3 = temp1;
        memory[var1:var1 + 0x20] = var3;
        var var4 = var1 + 0x20;
        var var5 = var2;
        var var6 = storage[var5];
    
        if (!var6) {
        label_086B:
            return var1;
        } else {
            var temp3 = var4;
            var temp4 = temp3 + var6 * 0x20;
            var4 = temp4;
            memory[0x00:0x20] = var5;
            var temp5 = keccak256(memory[0x00:0x20]);
            memory[temp3:temp3 + 0x20] = storage[temp5] & 0xffffffffffffffffffffffffffffffffffffffff;
            var5 = temp5 + 0x01;
            var6 = temp3 + 0x20;
        
            if (var4 <= var6) { goto label_086B; }
        
        label_0820:
            var temp6 = var5;
            var temp7 = var6;
            memory[temp7:temp7 + 0x20] = storage[temp6] & 0xffffffffffffffffffffffffffffffffffffffff;
            var5 = temp6 + 0x01;
            var6 = temp7 + 0x20;
        
            if (var4 > var6) { goto label_0820; }
            else { goto label_086B; }
        }
    }
    
    function func_0B63(var arg0) returns (var r0) {
        var temp0 = arg0;
        memory[temp0:temp0 + 0x1a16] = code[0x146d:0x2e83];
        return temp0 + 0x1a16;
    }
    
    function func_0B71(var arg0, var arg1, var arg2) returns (var r0) {
        var myaddress = 0x00;
        var var1 = 0x000b88;
        var var2 = 0x000b82;
        var var3 = arg1;
        var2 = func_1132(var3);
        var1 = func_0B82(var2);
        var temp0 = var1;
        myaddress = temp0;
        var temp1 = arg1;
        memory[myaddress:myaddress + 0x20] = temp1;
        var1 = myaddress + 0x20;
    
        if (arg2 + temp1 > arg0) { revert(memory[0x00:0x00]); }
    
        var2 = 0x000bae;
        var3 = arg1;
        var var4 = var1;
        var var5 = arg2;
        func_1236(var3, var4, var5);
        return myaddress;
    }
    
    function func_0B82(var arg0) returns (var r0) {
        var myaddress = 0x00;
        var var1 = 0x001115;
        var1 = func_1128();
        var temp0 = var1;
        myaddress = temp0;
        var1 = 0x001123;
        var var2 = arg0;
        var var3 = myaddress;
        func_127B(var2, var3);
        return myaddress;
    }
    
    function func_0BB6(var arg0, var arg1) returns (var r0) {
        var myaddress = msg.data[arg1:arg1 + 0x20];
        var var1 = 0x000bc7;
        var var2 = myaddress;
        func_1438(var2);
        return myaddress;
    }
    
    function func_0BCD(var arg0, var arg1) returns (var r0) {
        var myaddress = 0x00;
    
        if (arg1 + 0x1f i>= arg0) { revert(memory[0x00:0x00]); }
    
        var temp0 = arg1;
        var var1 = msg.data[temp0:temp0 + 0x20];
        var var2 = 0x000bf1;
        var var3 = arg0;
        var var4 = var1;
        var var5 = temp0 + 0x20;
        return func_0B71(var3, var4, var5);
    }
    
    function func_0BFA(var arg0, var arg1) returns (var r0) {
        var myaddress = msg.data[arg1:arg1 + 0x20];
        var var1 = 0x000c0b;
        var var2 = myaddress;
        func_1452(var2);
        return myaddress;
    }
    
    function func_0C11(var arg0, var arg1) returns (var r0) {
        var myaddress = 0x00;
    
        if (arg0 - arg1 i< 0x20) { revert(memory[0x00:0x00]); }
    
        var var1 = 0x00;
        var var2 = 0x000c34;
        var var3 = arg0;
        var var4 = arg1 + var1;
        return func_0BB6(var3, var4);
    }
    
    function func_0C3D(var arg0, var arg1) returns (var r0, var arg0) {
        var myaddress = 0x00;
        var var1 = myaddress;
    
        if (arg0 - arg1 i< 0x40) { revert(memory[0x00:0x00]); }
    
        var var2 = 0x00;
        var var3 = 0x000c61;
        var var4 = arg0;
        var var5 = arg1 + var2;
        var3 = func_0BB6(var4, var5);
        myaddress = var3;
        var2 = 0x20;
        var3 = 0x000c74;
        var4 = arg0;
        var5 = arg1 + var2;
        var3 = func_0BFA(var4, var5);
        arg0 = var3;
        r0 = myaddress;
        return r0, arg0;
    }
    
    function func_0C7E(var arg0, var arg1) returns (var r0, var arg0, var arg1, var r3, var r4, var r5, var r6) {
        r3 = 0x00;
        r4 = r3;
        r5 = 0x00;
        r6 = r5;
        var var4 = 0x00;
        var var5 = var4;
        var var6 = 0x00;
    
        if (arg0 - arg1 i< 0xe0) { revert(memory[0x00:0x00]); }
    
        var var7 = msg.data[arg1:arg1 + 0x20];
    
        if (var7 > 0xffffffffffffffff) { revert(memory[0x00:0x00]); }
    
        var var8 = 0x000cc3;
        var var9 = arg0;
        var var10 = arg1 + var7;
        var8 = func_0BCD(var9, var10);
        r3 = var8;
        var7 = msg.data[arg1 + 0x20:arg1 + 0x20 + 0x20];
    
        if (var7 > 0xffffffffffffffff) { revert(memory[0x00:0x00]); }
    
        var8 = 0x000cef;
        var9 = arg0;
        var10 = arg1 + var7;
        var8 = func_0BCD(var9, var10);
        r4 = var8;
        var7 = 0x40;
        var8 = 0x000d02;
        var9 = arg0;
        var10 = arg1 + var7;
        var8 = func_0BFA(var9, var10);
        r5 = var8;
        var7 = 0x60;
        var8 = 0x000d15;
        var9 = arg0;
        var10 = arg1 + var7;
        var8 = func_0BFA(var9, var10);
        r6 = var8;
        var7 = 0x80;
        var8 = 0x000d28;
        var9 = arg0;
        var10 = arg1 + var7;
        var8 = func_0BFA(var9, var10);
        var4 = var8;
        var7 = 0xa0;
        var8 = 0x000d3b;
        var9 = arg0;
        var10 = arg1 + var7;
        var8 = func_0BFA(var9, var10);
        var5 = var8;
        var7 = 0xc0;
        var8 = 0x000d4e;
        var9 = arg0;
        var10 = arg1 + var7;
        var8 = func_0BB6(var9, var10);
        var temp0 = r6;
        r6 = var8;
        var temp1 = r3;
        r3 = temp0;
        r0 = temp1;
        var temp2 = r4;
        r4 = var4;
        arg0 = temp2;
        var temp3 = r5;
        r5 = var5;
        arg1 = temp3;
        return r0, arg0, arg1, r3, r4, r5, r6;
    }
    
    function func_0D5D(var arg0, var arg1) returns (var r0) {
        var myaddress = 0x00;
    
        if (arg0 - arg1 i< 0x20) { revert(memory[0x00:0x00]); }
    
        var var1 = 0x00;
        var var2 = 0x000d80;
        var var3 = arg0;
        var var4 = arg1 + var1;
        return func_0BFA(var3, var4);
    }
    
    function func_0D89(var arg0, var arg1) returns (var r0) {
        var myaddress = 0x00;
        var var1 = 0x000d97;
        var var2 = arg0;
        var var3 = arg1;
        func_0DA3(var2, var3);
        return arg0 + 0x20;
    }
    
    function func_0DA3(var arg0, var arg1) {
        var myaddress = 0x000dae;
        var var1 = arg1;
        myaddress = func_11F8(var1);
        memory[arg0:arg0 + 0x20] = myaddress;
    }
    
    function func_0DB4(var arg0, var arg1) {
        var myaddress = 0x000dbf;
        var var1 = arg1;
        myaddress = func_11F8(var1);
        memory[arg0:arg0 + 0x20] = myaddress;
    }
    
    function func_0DC5(var arg0, var arg1) returns (var r0) {
        var myaddress = 0x00;
        var var1 = 0x000dd2;
        var var2 = arg1;
        var1 = func_1178(var2);
        var2 = 0x000dde;
        var var3 = var1;
        var var4 = arg0;
        var2 = func_119B(var3, var4);
        arg0 = var2;
        var2 = 0x000deb;
        var3 = arg1;
        var2 = func_1168(var3);
        var3 = var2;
        var4 = 0x00;
    
        if (var4 >= var1) {
        label_0E22:
            return arg0;
        } else {
        label_0DF9:
            var var5 = memory[var3:var3 + 0x20];
            var var6 = 0x000e06;
            var var7 = arg0;
            var var8 = var5;
            var6 = func_0D89(var7, var8);
            arg0 = var6;
            var6 = 0x000e13;
            var7 = var3;
            var6 = func_118E(var7);
            var3 = var6;
            var4 = var4 + 0x01;
        
            if (var4 >= var1) { goto label_0E22; }
            else { goto label_0DF9; }
        }
    }
    
    function func_0E2F(var arg0, var arg1) returns (var r0) {
        var myaddress = 0x00;
        var var1 = 0x000e3c;
        var var2 = arg1;
        var1 = func_1183(var2);
        var2 = 0x000e48;
        var var3 = var1;
        var var4 = arg0;
        var2 = func_11AC(var3, var4);
        var temp0 = var2;
        arg0 = temp0;
        var2 = 0x000e5a;
        var3 = var1;
        var4 = arg0;
        var var5 = arg1 + 0x20;
        func_1245(var3, var4, var5);
        var2 = 0x000e65;
        var3 = var1;
        var2 = func_135D(var3);
        return arg0 + var2;
    }
    
    function func_0E70(var arg0) returns (var r0) {
        var myaddress = 0x00;
        var var1 = 0x000e7f;
        var var2 = 0x1f;
        var var3 = arg0;
        var1 = func_11AC(var2, var3);
        var temp0 = var1;
        arg0 = temp0;
        var1 = 0x000e8c;
        var2 = arg0;
        func_136E(var2);
        return arg0 + 0x20;
    }
    
    function func_0E97(var arg0) returns (var r0) {
        var myaddress = 0x00;
        var var1 = 0x000ea6;
        var var2 = 0x23;
        var var3 = arg0;
        var1 = func_11AC(var2, var3);
        var temp0 = var1;
        arg0 = temp0;
        var1 = 0x000eb3;
        var2 = arg0;
        func_1397(var2);
        return arg0 + 0x40;
    }
    
    function func_0EBE(var arg0) returns (var r0) {
        var myaddress = 0x00;
        var var1 = 0x000ecd;
        var var2 = 0x0e;
        var var3 = arg0;
        var1 = func_11AC(var2, var3);
        var temp0 = var1;
        arg0 = temp0;
        var1 = 0x000eda;
        var2 = arg0;
        func_13E6(var2);
        return arg0 + 0x20;
    }
    
    function func_0EE5(var arg0) returns (var r0) {
        var myaddress = 0x00;
        var var1 = 0x000ef4;
        var var2 = 0x17;
        var var3 = arg0;
        var1 = func_11AC(var2, var3);
        var temp0 = var1;
        arg0 = temp0;
        var1 = 0x000f01;
        var2 = arg0;
        func_140F(var2);
        return arg0 + 0x20;
    }
    
    function func_0F0C(var arg0, var arg1) {
        var myaddress = 0x000f17;
        var var1 = arg1;
        myaddress = func_122C(var1);
        memory[arg0:arg0 + 0x20] = myaddress;
    }
    
    function func_0F1D(var arg0, var arg1) returns (var r0) {
        var temp0 = arg1;
        var myaddress = temp0 + 0x20;
        var var1 = 0x000f34;
        var var2 = temp0;
        var var3 = arg0;
        func_0DB4(var2, var3);
        return myaddress;
    }
    
    function func_0F3A(var arg0, var arg1) returns (var r0) {
        var temp0 = arg1;
        var myaddress = temp0 + 0x20;
        memory[temp0:temp0 + 0x20] = myaddress - temp0;
        var var1 = 0x000f56;
        var var2 = myaddress;
        var var3 = arg0;
        return func_0DC5(var2, var3);
    }
    
    function func_0F5E(var arg0, var arg1, var arg2, var arg3, var arg4, var arg5, var arg6) returns (var r0) {
        var temp0 = arg6;
        var myaddress = temp0 + 0xc0;
        memory[temp0:temp0 + 0x20] = myaddress - temp0;
        var var1 = 0x000f7a;
        var var2 = myaddress;
        var var3 = arg0;
        var1 = func_0E2F(var2, var3);
        var temp1 = var1;
        myaddress = temp1;
        var temp2 = arg6;
        memory[temp2 + 0x20:temp2 + 0x20 + 0x20] = myaddress - temp2;
        var1 = 0x000f90;
        var2 = myaddress;
        var3 = arg1;
        var1 = func_0E2F(var2, var3);
        myaddress = var1;
        var1 = 0x000fa1;
        var2 = arg6 + 0x40;
        var3 = arg2;
        func_0F0C(var2, var3);
        var1 = 0x000fb0;
        var2 = arg6 + 0x60;
        var3 = arg3;
        func_0F0C(var2, var3);
        var1 = 0x000fbf;
        var2 = arg6 + 0x80;
        var3 = arg4;
        func_0F0C(var2, var3);
        var1 = 0x000fce;
        var2 = arg6 + 0xa0;
        var3 = arg5;
        func_0F0C(var2, var3);
        return myaddress;
    }
    
    function func_0FD9(var arg0, var arg1, var arg2, var arg3, var arg4, var arg5, var arg6, var arg7) returns (var r0) {
        var temp0 = arg7;
        var myaddress = temp0 + 0xe0;
        memory[temp0:temp0 + 0x20] = myaddress - temp0;
        var var1 = 0x000ff5;
        var var2 = myaddress;
        var var3 = arg0;
        var1 = func_0E2F(var2, var3);
        var temp1 = var1;
        myaddress = temp1;
        var temp2 = arg7;
        memory[temp2 + 0x20:temp2 + 0x20 + 0x20] = myaddress - temp2;
        var1 = 0x00100b;
        var2 = myaddress;
        var3 = arg1;
        var1 = func_0E2F(var2, var3);
        myaddress = var1;
        var1 = 0x00101c;
        var2 = arg7 + 0x40;
        var3 = arg2;
        func_0F0C(var2, var3);
        var1 = 0x00102b;
        var2 = arg7 + 0x60;
        var3 = arg3;
        func_0F0C(var2, var3);
        var1 = 0x00103a;
        var2 = arg7 + 0x80;
        var3 = arg4;
        func_0F0C(var2, var3);
        var1 = 0x001049;
        var2 = arg7 + 0xa0;
        var3 = arg5;
        func_0F0C(var2, var3);
        var1 = 0x001058;
        var2 = arg7 + 0xc0;
        var3 = arg6;
        func_0DB4(var2, var3);
        return myaddress;
    }
    
    function func_1064(var arg0) returns (var r0) {
        var temp0 = arg0;
        var myaddress = temp0 + 0x20;
        memory[temp0:temp0 + 0x20] = myaddress - temp0;
        var var1 = 0x00107f;
        var var2 = myaddress;
        return func_0E70(var2);
    }
    
    function func_1086(var arg0) returns (var r0) {
        var temp0 = arg0;
        var myaddress = temp0 + 0x20;
        memory[temp0:temp0 + 0x20] = myaddress - temp0;
        var var1 = 0x0010a1;
        var var2 = myaddress;
        return func_0E97(var2);
    }
    
    function func_10A8(var arg0) returns (var r0) {
        var temp0 = arg0;
        var myaddress = temp0 + 0x20;
        memory[temp0:temp0 + 0x20] = myaddress - temp0;
        var var1 = 0x0010c3;
        var var2 = myaddress;
        return func_0EBE(var2);
    }
    
    function func_10CA(var arg0) returns (var r0) {
        var temp0 = arg0;
        var myaddress = temp0 + 0x20;
        memory[temp0:temp0 + 0x20] = myaddress - temp0;
        var var1 = 0x0010e5;
        var var2 = myaddress;
        return func_0EE5(var2);
    }
    
    function func_10EC(var arg0, var arg1) returns (var r0) {
        var temp0 = arg1;
        var myaddress = temp0 + 0x20;
        var var1 = 0x001103;
        var var2 = temp0;
        var var3 = arg0;
        func_0F0C(var2, var3);
        return myaddress;
    }
    
    function func_1128() returns (var r0) { return memory[0x40:0x60]; }
    
    function func_1132(var arg0) returns (var r0) {
        var myaddress = 0x00;
    
        if (arg0 <= 0xffffffffffffffff) {
            var var1 = 0x00115b;
            var var2 = arg0;
            var1 = func_135D(var2);
            return var1 + 0x20;
        } else {
            var1 = 0x00114f;
            memory[0x00:0x20] = 0x4e487b7100000000000000000000000000000000000000000000000000000000;
            memory[0x04:0x24] = 0x41;
            revert(memory[0x00:0x24]);
        }
    }
    
    function func_1168(var arg0) returns (var r0) { return arg0 + 0x20; }
    
    function func_1178(var arg0) returns (var r0) { return memory[arg0:arg0 + 0x20]; }
    
    function func_1183(var arg0) returns (var r0) { return memory[arg0:arg0 + 0x20]; }
    
    function func_118E(var arg0) returns (var r0) { return arg0 + 0x20; }
    
    function func_119B(var arg0, var arg1) returns (var r0) {
        var temp0 = arg1;
        memory[temp0:temp0 + 0x20] = arg0;
        return temp0 + 0x20;
    }
    
    function func_11AC(var arg0, var arg1) returns (var r0) {
        var temp0 = arg1;
        memory[temp0:temp0 + 0x20] = arg0;
        return temp0 + 0x20;
    }
    
    function func_11BD(var arg0, var arg1) returns (var r0) {
        var myaddress = 0x00;
        var var1 = 0x0011ca;
        var var2 = arg1;
        var1 = func_122C(var2);
        arg1 = var1;
        var1 = 0x0011d7;
        var2 = arg0;
        var1 = func_122C(var2);
        arg0 = var1;
    
        if (arg1 >= arg0) { return arg1 - arg0; }
    
        var1 = 0x0011ec;
        memory[0x00:0x20] = 0x4e487b7100000000000000000000000000000000000000000000000000000000;
        memory[0x04:0x24] = 0x11;
        revert(memory[0x00:0x24]);
    }
    
    function func_11F8(var arg0) returns (var r0) {
        var myaddress = 0x00;
        var var1 = 0x001205;
        var var2 = arg0;
        return func_120C(var2);
    }
    
    function func_120C(var arg0) returns (var r0) { return arg0 & 0xffffffffffffffffffffffffffffffffffffffff; }
    
    function func_122C(var arg0) returns (var r0) { return arg0; }
    
    function func_1236(var arg0, var arg1, var arg2) {
        var temp0 = arg0;
        var temp1 = arg1;
        memory[temp1:temp1 + temp0] = msg.data[arg2:arg2 + temp0];
        memory[temp1 + temp0:temp1 + temp0 + 0x20] = 0x00;
    }
    
    function func_1245(var arg0, var arg1, var arg2) {
        var myaddress = 0x00;
    
        if (myaddress >= arg0) {
        label_1265:
        
            if (myaddress <= arg0) { return; }
        
            memory[arg1 + arg0:arg1 + arg0 + 0x20] = 0x00;
            return;
        } else {
        label_1252:
            var temp0 = myaddress;
            memory[arg1 + temp0:arg1 + temp0 + 0x20] = memory[arg2 + temp0:arg2 + temp0 + 0x20];
            myaddress = temp0 + 0x20;
        
            if (myaddress >= arg0) { goto label_1265; }
            else { goto label_1252; }
        }
    }
    
    function func_127B(var arg0, var arg1) {
        var myaddress = 0x001286;
        var var1 = arg0;
        myaddress = func_135D(var1);
        var temp0 = arg1;
        var temp1 = temp0 + myaddress;
        myaddress = temp1;
    
        if (!((myaddress > 0xffffffffffffffff) | (myaddress < temp0))) {
            memory[0x40:0x60] = myaddress;
            return;
        } else {
            var1 = 0x0012a7;
            memory[0x00:0x20] = 0x4e487b7100000000000000000000000000000000000000000000000000000000;
            memory[0x04:0x24] = 0x41;
            revert(memory[0x00:0x24]);
        }
    }
    
    function func_12B1(var arg0) returns (var r0) {
        var myaddress = 0x00;
        var var1 = 0x0012be;
        var var2 = arg0;
        var1 = func_122C(var2);
        arg0 = var1;
    
        if (arg0 != 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { return arg0 + 0x01; }
    
        var1 = 0x0012f3;
        memory[0x00:0x20] = 0x4e487b7100000000000000000000000000000000000000000000000000000000;
        memory[0x04:0x24] = 0x11;
        revert(memory[0x00:0x24]);
    }
    
    function func_135D(var arg0) returns (var r0) { return arg0 + 0x1f & ~0x1f; }
    
    function func_136E(var arg0) {
        memory[arg0:arg0 + 0x20] = 0x6465666c6174696f6e206d6f7265207468616e203130302070657263656e7400;
    }
    
    function func_1397(var arg0) {
        var temp0 = arg0;
        memory[temp0:temp0 + 0x20] = 0x6d696e20737570706c79206d6f7265207468616e20696e697469616c20737570;
        memory[temp0 + 0x20:temp0 + 0x20 + 0x20] = 0x706c790000000000000000000000000000000000000000000000000000000000;
    }
    
    function func_13E6(var arg0) {
        memory[arg0:arg0 + 0x20] = 0x6e6f7420656e6f75676820455448000000000000000000000000000000000000;
    }
    
    function func_140F(var arg0) {
        memory[arg0:arg0 + 0x20] = 0x4f6e6c79206f776e65722063616e20646f207468697321000000000000000000;
    }
    
    function func_1438(var arg0) {
        var myaddress = 0x001443;
        var var1 = arg0;
        myaddress = func_11F8(var1);
    
        if (arg0 == myaddress) { return; }
        else { revert(memory[0x00:0x00]); }
    }
    
    function func_1452(var arg0) {
        var myaddress = 0x00145d;
        var var1 = arg0;
        myaddress = func_122C(var1);
    
        if (arg0 == myaddress) { return; }
        else { revert(memory[0x00:0x00]); }
    }
}