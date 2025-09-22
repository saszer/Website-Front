import { getPosts as ghostGetPosts, getPostBySlug as ghostGetPostBySlug } from "./ghost";
import { getPosts as wpGetPosts, getPostBySlug as wpGetPostBySlug } from "./wordpress";

const provider = (process.env["CMS_PROVIDER"] || "ghost").toLowerCase();

export const getPosts = provider === "wordpress" ? wpGetPosts : ghostGetPosts;
export const getPostBySlug = provider === "wordpress" ? wpGetPostBySlug : ghostGetPostBySlug;
