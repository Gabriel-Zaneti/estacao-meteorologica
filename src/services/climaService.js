const API_URL="/api"

export async function buscarMedicaoAtual(cidadeSelecionada) {
  const url = `${API_URL}/weather/${cidadeSelecionada}`;
  const resposta = await fetch(url);
  if (!resposta.ok) {
    throw new Error("Não foi possível buscar a medição.");
  }
  const dados = await resposta.json()

  return dados;
}

export async function buscarCidades() {
  const url = `${API_URL}/cities`;
  const resposta = await fetch(url);
  if (!resposta.ok) {
    throw new Error("Não foi possível buscar as cidades");
  }
  const dados = await resposta.json()

  return dados;
}

export async function buscarHistorico(cidadeSelecionada) {
  const url = `${API_URL}/weather/${cidadeSelecionada}/history`;
  const resposta = await fetch(url);
  if (!resposta.ok) {
    throw new Error("Não foi possível acessar o histórico.");
  }
  const dados = await resposta.json()

  return dados;
}

export async function buscarTemperaturasHoje(cidadeSelecionada) {
  const url = `${API_URL}/weather/${cidadeSelecionada}/hourly`;
  const resposta = await fetch(url);
  if (!resposta.ok) {
    throw new Error("Não foi possível acessar as temperaturas diárias.");
  }
  const dados = await resposta.json()

  return dados;
}

export async function buscarCondicoes(cidadeSelecionada) {
  const url = `${API_URL}/weather/${cidadeSelecionada}/daily`;
  const resposta = await fetch(url);
  if (!resposta.ok) {
    throw new Error("Não foi possível acessar a temperatura min/max do dia.");
  }
  const dados = await resposta.json()

  return dados;
}