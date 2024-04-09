type CommentType = string | {
  start: string;
  lineWith: string;
  end: string;
}

interface NxStatic {
  niceComments: (target: string[], type: CommentType) => string;
}
