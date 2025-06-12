/**
 * 백예린 팬 블로그 소개 페이지
 * 블로그 목적과 백예린에 대한 애정을 담은 페이지
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Music, Star, Users, Calendar, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4">
      {/* 헤더 섹션 */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
          백예린 팬 블로그 소개
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          백예린의 음악과 함께하는 여정을 기록하고 공유하는 공간입니다.
        </p>
      </div>

      {/* 블로그 소개 */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Heart className="h-6 w-6 text-pink-500" />
            이 블로그는 무엇인가요?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            안녕하세요! 이곳은 백예린(Yerin Baek)의 음악을 사랑하는 팬이 운영하는 블로그입니다. 
            백예린의 따뜻하고 감성적인 음악처럼, 이 공간도 편안하고 아늑한 곳이 되었으면 합니다.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            백예린의 최신 소식, 음악 리뷰, 콘서트 후기, 그리고 팬들과의 소통을 통해 
            더 많은 사람들이 백예린의 음악에 빠져들 수 있기를 바랍니다.
          </p>
        </CardContent>
      </Card>

      {/* 백예린 소개 */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Star className="h-6 w-6 text-yellow-500" />
            백예린은 누구인가요?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Music className="h-4 w-4" />
                음악 스타일
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                R&B, 소울, 팝을 아우르는 독특한 음악 스타일로 많은 사랑을 받고 있습니다. 
                섬세한 감정 표현과 따뜻한 목소리가 특징입니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Globe className="h-4 w-4" />
                활동 영역
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                솔로 아티스트로서 국내뿐만 아니라 해외에서도 인정받는 뮤지션입니다. 
                다양한 아티스트와의 콜라보레이션도 활발히 진행하고 있습니다.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 블로그 목표 */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Users className="h-6 w-6 text-blue-500" />
            우리의 목표
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg bg-pink-50 dark:bg-pink-950/20">
              <Music className="h-8 w-8 text-pink-500 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">음악 공유</h3>
              <p className="text-sm text-muted-foreground">
                백예린의 음악을 더 많은 사람들과 나누기
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20">
              <Heart className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">팬 커뮤니티</h3>
              <p className="text-sm text-muted-foreground">
                팬들이 모여 소통할 수 있는 공간 제공
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20">
              <Star className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">정보 제공</h3>
              <p className="text-sm text-muted-foreground">
                최신 소식과 콘서트 정보 빠르게 전달
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 관심 분야 */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Calendar className="h-6 w-6 text-green-500" />
            주요 콘텐츠
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300">
               신곡 리뷰
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
               콘서트 후기
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
               최신 소식
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
               음악 분석
            </Badge>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
               사진 갤러리
            </Badge>
            <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
               팬 이야기
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* 연락처 */}
      <Card className="text-center">
        <CardHeader>
          <CardTitle className="text-2xl">함께 해요!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            백예린의 음악을 사랑하는 모든 분들을 환영합니다. 
            함께 이야기하고 음악을 나누어요!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/posts">
                 블로그 글 보기
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/categories">
                 카테고리 둘러보기
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
