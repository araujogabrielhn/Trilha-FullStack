/* Site 'regular expressions 101' 

Flags mais úteis: /global e /ig

Caracteres " a+, ^, $, . (ponto = coringa), \w (todas as letras e números), \W (tudo o que não é letra e número(espaço, virgulas, etc"
            \d (qualquer digito de 0 à 9), \s (encontrar espaços), \S (tudo o que não é um espaço em branco)

            [a-z] ( de 'a' à 'z' minúsculos) [A-Z] (...)  
            Os colchetes significam um agrupamento de regras.

            a{2,3}

            */

function PhoneNumber(PhoneNumberString) {
    const fixedString = PhoneNumberString.replace(/[\sa-zA-Z]]/g, "")
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]
    this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "")
}

console.log(new PhoneNumber('+55 (61) 9 9154-2581'))
console.log(new PhoneNumber('+1 (55) as555-999-8888'))