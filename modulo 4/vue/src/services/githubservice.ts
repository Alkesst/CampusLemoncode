import { MemberEntity } from "@/types";

const baseUrlRequest = 'https://api.github.com/';
const baseUrlOrgsRequest = `${baseUrlRequest}orgs/`

export const get = async () : Promise<MemberEntity[]> => {
  const members = await fetch(`${baseUrlOrgsRequest}lemoncode/members`)
    .then((response) => response.json());

  return members;
}

export const getByName = async (orgName: string): Promise<MemberEntity[]> => {
  const members = await fetch(`${baseUrlOrgsRequest}${orgName}/members`)
    .then((response) => response.json());

  return members;
}

export const getMember = async (login: MemberEntity["login"]): Promise<MemberEntity | undefined>  =>{
  if (!login) throw new Error("id is required");

  const member = await fetch(`${baseUrlRequest}users/${login}`)
    .then((response) => response.json());

  return member;
}
