class Github {
    constructor(){
        this.client_ID= "43a1b8ed2e022dac3a2c";
        this.client_secret= "1c7727cf4d1540bcf935b5465fe91c3b0aea233f";
        this.user = "karlkarimoisa";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
        this.apiUrl = "https://api.github.com/users/";
    }

    //method to get data from github API
    async getUserData(){
        let urlProfile = `${this.apiUrl}${this.user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`;
        let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`;

        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}