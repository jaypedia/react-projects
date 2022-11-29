# My movies

## Introduction

- 내가 본 영화의 각종 정보들을 저장하고, 정렬하고, 검색할 수 있는 웹 사이트

- 프로젝트 기간 : 2021.12.2 ~ 12.31

- 라이브러리 : React, Ant Design, Axios, Moment, Json server, React router dom

- 배포 : heroku



## Requirements

### `Home page`

#### Navigation bar

- 로고가 담긴 네비게이션 바를 보여준다.

#### Movie list

- 영화 리스트를 보여준다.
  - 각 페이지는 아이템 4개이다.
  - 각 아이템은 영화 포스터, 영화 제목, 영화 감독, 카테고리, 별점, 생성일을 보여준다.

#### Filtering

- 장르에 맞는 영화만 보여지도록 필터링 할 수 있다.

#### Sorting

- 장르, 연도, 별점 순으로 영화를 정렬할 수 있다.
- 내림차순, 오름차순 옵션을 선택할 수 있다.

#### Searching

- 제목으로 영화를 검색할 수 있다.

#### Upload new movie

- 새 영화를 업로드할 수 있다.
- 사진 업로드는 Cloudinary를 활용한다.

#### Pagination

- 페이지를 넘길 수 있다.

### `Detail page`

- 리스트 페이지에서 선택한 영화의 상세정보를 보여준다.
- 해당 영화를 수정할 수 있다.
  - 수정 시, 수정한 날짜가 기록되며 표시된다.
- 해당 영화를 삭제할 수 있다.
