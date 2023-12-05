// Tipos primitivos
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22;

// Arrays
const lista: number[] = [];
// lista.push("Jhonathan", "Cachorro", 22, true, []);
lista.push(13, 22.5, 22, 89, 1.58);

// Tipos Personalizados (Type Alias)
type TransacaoTeste = {
  tipoTransacao: TipoTransacaoTeste,
  data: Date,
  valor: number,
};

// Enum
enum TipoTransacaoTeste {
  DEPOSITO = "Depósito",
  TRANSFERENCIA = "Transferência",
  PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTransacaoTeste: TransacaoTeste = {
  tipoTransacao: TipoTransacaoTeste.PAGAMENTO_BOLETO,
  data: new Date(),
  valor: 0,
};

console.log(novaTransacaoTeste);
