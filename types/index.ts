/**
 * Types for use in the HackerNews Typescript-NextJS demo web app
 */

export type PostType = {
  id: string;
  title: string;
  text: string | undefined;
  deleted: boolean;
  type: string;
  by: string;
  time: number;
  dead: boolean;
  parent: number | undefined;
  poll: number | undefined;
  kids: number[];
  url: string;
  score: number;
  parts: number[];
  descendants: number;
};

export type CommentType = {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
};
