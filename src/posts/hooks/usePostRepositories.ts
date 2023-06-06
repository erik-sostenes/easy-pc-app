import { Post } from "../domain/Post";
import { RepositoryPosts } from "../domain/RepositoryPosts";

export function  usePostRepositories(id: number, repository: RepositoryPosts): Promise<Post> {
    return repository.searchById(id);
}