import { client, checkError } from './client';

export async function getDogs() {
  const resp = await client.from('dogs').select('*');
  return checkError(resp);
}

export async function getDogById(id) {
  const resp = await client.from('dogs').select('*').eq('id', id).single();
  return checkError(resp);
}

export async function deleteById(id) {
  const resp = await client.from('dogs').delete().eq('id', id);
  return checkError(resp);
}

export async function createDog(dog) {
  const resp = await client.from('dogs').insert(dog);
  return checkError(resp);
}
