export class User {
  constructor(
    public login: string,
    public id: number,
    public name: string,
    public avatar_url: string,
    public url: string,
    public public_repos: number,
    public followers: number,
    public following: number,
    public organizations_url: string,
    public repos_url: string,
    public company: string,
    public location: string,
    public bio: string,
    public hireable: string,
    public blog: string,
    public email: string,
    public public_gists: string,
    public html_url: string,
    
  ) {}
}
