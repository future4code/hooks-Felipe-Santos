const dnaToRna=(dna:string)=>{
    const listDna=dna.toUpperCase().split("")
    const lettersDna=listDna.map((letter)=>{
        switch(letter){
            case "A":
            return letter="U"
             break;
            case "T":
            return letter="A"
            break;
            case"C":
            return letter="G"
            break;
            case "G":
                return letter="C"
            default :
            return ""
            break

        }
    })
    let rna=lettersDna.join("")
    return rna
}
console.log(dnaToRna("ATTGCTGCGCATTAACGACGCGTA"))