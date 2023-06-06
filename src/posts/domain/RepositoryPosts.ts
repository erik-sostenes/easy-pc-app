import {Post} from "./Post";

export interface RepositoryPosts {
    searchAll(): Promise<Post[]>;

    searchById(id: number): Promise<Post>;
}