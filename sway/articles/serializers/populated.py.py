from comments.serializers.populated import PopulatedCommentSerializer
from .common import ArticleSerializer


class PopulatedArticleSerializer(ArticleSerializer):
    comments = PopulatedCommentSerializer(many=True)
