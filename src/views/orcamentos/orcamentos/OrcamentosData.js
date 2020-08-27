const orcamentosData = [
  {
    id: 0,
    orcamento: "#01",
    data: "20/01/2020",
    dataDeExpiracao: "20/01/2020",
    valor: "R$ 200,00",
    referencias: "",
    status: "Aceito",
    descricao: "Compra de novo trator.",
    comentatio: [
      {
        id: 0,
        comentario: "Do que se trata o termo 'afiliação'?",
        comentarioPai: null,
        feitopor: "Por Mim",
        feitoem: "18/08/2020",
      },
      {
        id: 1,
        comentario:
          "O termo afiliado é o nome que se dá ao indivíduo afiliado a conafer",
        comentarioPai: 0,
        feitopor: "Colaborador Jurídico",
        feitoem: "19/08/2020",
      },
    ],
  },
  {
    id: 0,
    orcamento: "#02",
    data: "01/02/2020",
    dataDeExpiracao: "20/01/2020",
    valor: "R$ 300,50",
    referencias: "",
    status: "Enviado",
    descricao: "Compra de caminhão",
    comentatio: [
      {
        id: 0,
        comentario: "E esse contrato aqui? Não entendi seu propósito",
        comentarioPai: null,
        feitopor: "Por Mim",
        feitoem: "18/08/2020",
      },
      {
        id: 1,
        comentario:
          "O termo afiliado é o nome que se dá ao indivíduo afiliado a conafer",
        comentarioPai: 0,
        feitopor: "Colaborador Jurídico",
        feitoem: "19/08/2020",
      },
    ],
  },
];

export default orcamentosData;
