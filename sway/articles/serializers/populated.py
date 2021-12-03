from .common import ArticleSerializer
from comments.serializers.populated import PopulatedCommentSerializer


class PopulatedArticleSerializer(ArticleSerializer):
    comments = PopulatedCommentSerializer(many=True)
