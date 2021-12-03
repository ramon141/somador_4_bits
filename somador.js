function somadorBit(A, B, Cin) {
    Cin = Cin || false;

    // Este objeto irá conter as seguintes informações A, B, Cin, S, Cout
    let obj = {};

    obj.S = !!((A ^ B) ^ Cin);
    obj.Cout = !!(((A ^ B) & Cin) || (A & B));

    return obj;
}

function somador2Bits(A, B, Cin) {
    let first = somadorBit(A[1], B[1], Cin);
    let second = somadorBit(A[0], B[0], first.Cout);

    return { S0: second.S, S1: first.S, Cout: second.Cout };
}

function somador4Bits(A, B, Cin) {
    let first = somador2Bits([A[2], A[3]], [B[2], B[3]], Cin);
    let second = somador2Bits([A[0], A[1]], [B[0], B[1]], first.Cout);

    return { S0: second.S0, S1: second.S1, S2: first.S0, S3: first.S1, Cout: second.Cout };

}

// console.log(somador4Bits(
//     [true, true, true, true],
//     [true, true, true, true],
//     false));

