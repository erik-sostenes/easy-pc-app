import {Post} from "../domain/Post";
import {RepositoryPosts} from "../domain/RepositoryPosts";

export class Repository implements RepositoryPosts {
    async searchAll(): Promise<Post[]> {
        const resp = await fetch('https://jsonplaceholder.typicode.com/photos',{
            next: {
                revalidate: 60
            }
        });

        if (!resp.ok) throw new Error('Failed fetching to posts');
    
        return await resp.json();
    }

    async searchById(id: number): Promise<Post> {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);

        if (!resp.ok) throw new Error(`Failed fetching to post with ${id}`);
    
        return await resp.json();
    }
}