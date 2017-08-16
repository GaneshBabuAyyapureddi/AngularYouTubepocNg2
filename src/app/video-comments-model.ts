export interface VideoCommentModel{
    username: string;
    icon: string;
    comment: string;
    noOfReplies: number;
    replies: VideoCommentModel[];
    likes: number;
    dislikes: number;
}


