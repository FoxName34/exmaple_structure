import { ApiResult } from "./ApiResult";

interface User {
    id: number;
    name: string;
    email: string;
}

interface Post {
    id: number;
    title: string;
    body: string;
}

interface Comment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}

interface ApiService {
    getUsers(): Promise<ApiResult<User[]>>;
    getUser(id: number): Promise<ApiResult<User>>;
    createUser(user: User): Promise<ApiResult<User>>;
    updateUser(id: number, user: User): Promise<ApiResult<User>>;
    deleteUser(id: number): Promise<ApiResult<void>>;

    getPosts(): Promise<ApiResult<Post[]>>;
    getPost(id: number): Promise<ApiResult<Post>>;
    createPost(post: Post): Promise<ApiResult<Post>>;
    updatePost(id: number, post: Post): Promise<ApiResult<Post>>;
    deletePost(id: number): Promise<ApiResult<void>>;

    getComments(): Promise<ApiResult<Comment[]>>;
    getComment(id: number): Promise<ApiResult<Comment>>;
    createComment(comment: Comment): Promise<ApiResult<Comment>>;
    updateComment(id: number, comment: Comment): Promise<ApiResult<Comment>>;
    deleteComment(id: number): Promise<ApiResult<void>>;
}

export type {
    User,
    Post,
    Comment,
    ApiService,
}