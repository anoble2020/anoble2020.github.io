"use client"

import { motion } from "framer-motion"
import GithubRepoCards from '@/components/github_repolist';

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    private: boolean;
}

async function fetchRepos() {
    const res = await fetch('https://api.github.com/users/anoble2020/repos?visibility=public&sort=updated&per_page=100');
    const data = await res.json();

    const filteredRepos = data.filter((repo : Repository) =>
        repo.private === false
    );

    return filteredRepos;
}

const ReposPage = async () => {
    const repos = await fetchRepos();

    return (
        <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
        >
            <GithubRepoCards repos={repos} />
        </motion.div>
    );
};

export default ReposPage;