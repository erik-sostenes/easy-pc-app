import { Post } from "../domain/Post";
import { RepositoryPosts } from "../domain/RepositoryPosts";

export function usePostsRepositories(repository: RepositoryPosts): Promise<Post[]> {
    return repository.searchAll();
}