export async function buscarMedicaoAtual(cidadeSelecionada) {
  const url = `http://localhost:8080/api/medicoes/atual?cidade=${cidadeSelecionada}`;
  const resposta = await fetch(url);
  if (!resposta.ok) {
    throw new Error("Não foi possível buscar a medição.");
  }
  const dados = await resposta.json()

  return dados;
}

export async function buscarCidades() {
  const url = "http://localhost:8080/api/cidades";
  const resposta = await fetch(url);
  if (!resposta.ok) {
    throw new Error("Não foi possível buscar as cidades");
  }
  const dados = await resposta.json()

  return dados;
}

export async function buscarHistorico(cidadeSelecionada) {
  const url = `http://localhost:8080/api/medicoes?cidade=${cidadeSelecionada}`;
  const resposta = await fetch(url);
  if (!resposta.ok) {
    throw new Error("Não foi possível acessar o histórico.");
  }
  const dados = await resposta.json()

  return dados;
}

export async function buscarTemperaturasHoje(cidadeSelecionada) {
  const url = `http://localhost:8080/api/medicoes?cidade=${cidadeSelecionada}`;
  const resposta = await fetch(url);
  if (!resposta.ok) {
    throw new Error("Não foi possível acessar as temperaturas diárias.");
  }
  const dados = await resposta.json()

  return dados;
}

export async function buscarCondicoes(cidadeSelecionada) {
  const url = `http://localhost:8080/api/medicoes?cidade=${cidadeSelecionada}`;
  const resposta = await fetch(url);
  if (!resposta.ok) {
    throw new Error("Não foi possível acessar a descrição e temperatura min/max do dia.");
  }
  const dados = await resposta.json()

  return dados;
}