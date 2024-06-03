"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Icons } from "@/components/icons"
import { Star, GitFork } from "lucide-react";

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

interface GithubRepoCardsProps {
  repos: Repository[];
}

const GithubRepoCards = ({ repos }: GithubRepoCardsProps ) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 m-10">
    {repos?.map((repo: Repository) => (
      <Card key={repo.id}>
        <CardHeader>
          <div className="flex items-center">
            <Icons.gitHub className="size-5 mr-2" />
            <CardTitle>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
              </a>
              </CardTitle>
          </div>
          <div className="flex mt-2">
            <div className="flex items-center mr-4">
              <Star className="size-4 mr-1" />
              <span>{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center">
              <GitFork className="size-4 mr-1" />
              <span>{repo.forks_count}</span>
            </div>
          </div>
          <CardDescription>
          {repo.description?.includes('my personal site') ? (
            <>
              <s>my personal site</s> this website
            </>
          ) : (
            repo.description
          )}
          </CardDescription>
        </CardHeader>
      </Card>
    ))}
  </div>
  )
};

export default GithubRepoCards;