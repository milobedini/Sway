from comments.serializers.common import CommentSerializer
from .common import ArticleSerializer


class PopulatedArticleSerializer(ArticleSerializer):
    comments = CommentSerializer(many=True)
